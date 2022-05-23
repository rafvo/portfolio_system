import Vue from 'vue'
import Http from '@/api/http';
import { Utils } from "@/util/utils";
import User from "@/domain/model/users";
import UserFilter from '@/domain/filters/users';

export default {
  namespaced: true,
  state: {
    all: {},
    active: false
  },
  getters: {
    active(state) {
      return state.active ? state.all[state.active] : false
    },
  },
  mutations: {
    active(state, active) {
      state.active = active
    },
    flush(state) {
      state.all = {}
    },
    add(state, model) {
      Vue.set(state.all, model.id, model)
    },
    update(state, { id, model }) {
      state.all[id] = model
    },
    delete(state, id) {
      Vue.delete(state.all, id)
    },
  },
  actions: {
    all({ commit }, all) {
      if (!Utils.exist(all)) return;

      for (let model of all) {
        commit('add', model)
      }
    },
    item({ commit }, item){
      if (!Utils.exist(item)) return;

      commit('add', item);
    },
    getAll({ dispatch }, filters = new UserFilter()) {
      return new Promise((resolve, reject) => {
        Http.get('/users/all', { params: filters }).then(response => {
          const data = response.data;
          dispatch('all', data.items);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 
     * @param {int} id
    */
    getId({ commit }, id) {
      if (!id) return;
      return new Promise((resolve, reject) => {
        Http.get(`/users/${id}`).then(response => {
          const data = response.data;
          commit('update', {id: data.id, model: data});
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 
     * @param {User} user 
    */
    insert({ dispatch }, user = new User()) {
      return new Promise((resolve, reject) => {
        Http.post(`/users/insert`, user).then(response => {
          if(response.status == 200) {
            const data = JSON.parse(JSON.stringify(response.data));
            dispatch('item', data.user);
            Vue.$toast.success(`${data.success}`, {
              timeout: 2000,
            });
            resolve(data);
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 
     * @param {int} id
     * @param {User} user 
    */
    update({ commit }, {id, user = new User()}) {
      if (!id) return;
      return new Promise((resolve, reject) => {
        Http.put(`/users/${id}/update`, user).then(response => {
          if(response.status == 200) {
            const data = JSON.parse(JSON.stringify(response.data));
            commit('update', { id: data.user.id, model: data.user });
            Vue.$toast.success(`${data.success}`, {
              timeout: 2000,
            });
            resolve(data);
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 
     * @param {int} id
    */
    remove({ commit }, id) {
      if (!id) return;
      return new Promise((resolve, reject) => {
        Http.delete(`/users/${id}/destroy`).then(response => {
          if(response.status == 200) {
            const data = JSON.parse(JSON.stringify(response.data));
            commit('delete', id);
            Vue.$toast.success(`${data.success}`, {
              timeout: 2000,
            });
            resolve(data);
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

//
//const formData = new FormData()
//if(model.photo != null) formData.append('photo', model.photo);

//formData.append("user", JSON.stringify(model));
// for (let i in list) {
//   commit('add',{...list[i], order: i})
// }