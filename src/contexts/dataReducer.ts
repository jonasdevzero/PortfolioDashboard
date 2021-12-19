import { constant } from "../constant"
import { DataStateI } from "./DataContext"

export function dataReducer(state: DataStateI, action: any): DataStateI {
    switch (action.type) {
        case constant.actions.SET_PROJECTS: 
            return { ...state, projects: action.projects }
        case constant.actions.SET_SKILLS:
            return { ...state, skills: action.skills }
        case constant.actions.ADD_PROJECT:
            return { ...state, projects: [action.project, ...state.projects] }
        case constant.actions.REMOVE_PROJECT:
            return { ...state, projects: state.projects.filter(p => p.id !== action.whereId) }
        case constant.actions.UPDATE_PROJECT:
            return { ...state, projects: state.projects.map(p => {
                if (p.id === action.whereId) 
                    return action.data.project;
                    
                return p
            }) }
        default:
            return state
    }
}
