import { constant } from "../constant"
import { DataStateI } from "./DataContext"

const { actions } = constant

export function dataReducer(state: DataStateI, action: any): DataStateI {
    switch (action.type) {
        case actions.SET_PROJECTS: 
            return { ...state, projects: action.projects }
        case actions.SET_SKILLS:
            return { ...state, skills: action.skills }
        case actions.ADD_PROJECT:
            return { ...state, projects: [action.project, ...state.projects] }
        case actions.REMOVE_PROJECT:
            return { ...state, projects: state.projects.filter(p => p.id !== action.whereId) }
        case actions.UPDATE_PROJECT:
            return { ...state, projects: state.projects.map(p => {
                if (p.id === action.whereId) 
                    return action.data.project;
                    
                return p
            }) }
        case actions.ADD_SKILL:
            return { ...state, skills: [action.skill, ...state.skills] }
        case actions.REMOVE_SKILL:
            return { ...state, skills: state.skills.filter(s => s.id !== action.whereId) }
        case actions.UPDATE_SKILL:
            return { ...state, skills: state.skills.map(s => {
                if (s.id === action.whereId)
                    return action.data.skill;

                return s
            }) }
        default:
            return state
    }
}
