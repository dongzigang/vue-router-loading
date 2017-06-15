import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		msg:"hello vuex",
		err:"",
		isLoading:false
	},
	getters:{
		wMsg(state){
			const result=state.msg.length
			return result
		}
	},
	mutations:{
		msgAdd(state,item){
			state.msg+=item
		},
		addErr(state,str){
			state.err=str
		},
		updateLoadingState(state,flag){
			state.isLoading=flag
		}
	},
	actions:{
		onAddMsg(context,item){
			if(item !=""){
				context.commit("msgAdd",item);
			}
			else{
				context.commit("addErr","添加失败")
			}
		},
		onLoading(context,flag){
			context.commit("updateLoadingState",flag);
		}
	},
	modules:{}
})
export default store;