import { createContext, useReducer, useEffect } from "react"
import { MessageI, ProjectI, SkillI } from "../types/data"
import * as projectService from "../services/projects"
import * as skillsService from "../services/skills"
import { constant } from "../constant"

export interface DataStateI {
    projects: ProjectI[],
    skills: SkillI[],
    messages: MessageI[]
}

const initialState = {} as DataStateI

function dataReducer(state: DataStateI, action: any): DataStateI {
    switch (action.type) {
        case constant.actions.SET_PROJECTS: 
            return { ...state, projects: action.projects }
        case constant.actions.SET_SKILLS:
            return { ...state, skills: action.skills }
        case constant.actions.ADD_PROJECT:
            return { ...state, projects: [action.project, ...state.projects] }
        default:
            return state
    }
}

export const DataContext = createContext({} as { state: DataStateI, dispatch: React.Dispatch<any> })

export function DataProvider({ children }: { children: React.ReactChild }) {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(() => {
        !state.projects ? projectService.getAll().then(p => dispatch({ type: constant.actions.SET_PROJECTS, projects: p })) : null
        !state.skills ? skillsService.getAll().then(s => dispatch({ type: constant.actions.SET_SKILLS, skills: s })) : null
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}