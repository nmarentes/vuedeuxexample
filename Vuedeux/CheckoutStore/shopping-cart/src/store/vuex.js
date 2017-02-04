import Vue from 'vue';
import Vuex from 'vuex';
import { vdxPluginCreator } from 'vuedeux';
import reduxStore from '../redux';
import * as reduxActionTypes from '../redux/constants/ActionTypes';

Vue.use(Vuex);

const vdx = vdxPluginCreator(reduxStore, reduxActionTypes);

const store = new Vuex.Store({
  // state, 
  // mutations,
  plugins: [vdx]
});


export default store;