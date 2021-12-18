import { createContext, useReducer, useEffect } from "react"
import { MessageI, ProjectI, SkillI } from "../types/data"
import * as projectService from "../services/projects"
import * as skillsService from "../services/skills"

export interface DataStateI {
    projects: ProjectI[],
    skills: SkillI[],
    messages: MessageI[]
}

const initialState = {} as DataStateI

function dataReducer(state: DataStateI, action: any): DataStateI {
    switch (action.type) {
        case "SET_PROJECTS": 
            return { ...state, projects: action.projects }
        case "SET_SKILLS":
            return { ...state, skills: action.skills }
        default:
            return state
    }
}

export const DataContext = createContext({} as { state: DataStateI, dispatch: React.Dispatch<any> })

export function DataProvider({ children }: { children: React.ReactChild }) {
    const [state, dispatch] = useReducer(dataReducer, initialState)

    useEffect(() => {
        !state.projects ? projectService.getAll().then(p => dispatch({ type: "SET_PROJECTS", projects: p })) : null
        !state.skills ? skillsService.getAll().then(s => dispatch({ type: "SET_SKILLS", skills: s })) : null
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}