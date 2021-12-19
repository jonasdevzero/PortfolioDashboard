export const constant = {
  routes: {
    LOGIN: "/",
    SIGNUP: "/signup",
    DASHBOARD: {
      PROJECTS: {
        HOME: "/dashboard/projects",
        CREATE: "/dashboard/projects/create",
        EDIT: (id: string) => `/dashboard/projects/edit/${id}`,
      },
      SKILLS: {
        HOME: "/dashboard/skills",
        CREATE: "/dashboard/skills/create",
        EDIT: (id: string) => `/dashboard/skills/edit/${id}`,
      },
      MESSAGES: "/dashboard/messages",
    },
  },

  actions: {
    SET_PROJECTS: "SET_PROJECTS",
    SET_SKILLS: "SET_SKILLS",
    ADD_PROJECT: "ADD_PROJECT",
    REMOVE_PROJECT: "REMOVE_PROJECT",
    UPDATE_PROJECT: "UPDATE_PROJECT",
    ADD_SKILL: "ADD_SKILL",
    REMOVE_SKILL: "REMOVE_SKILL",
    UPDATE_SKILL: "UPDATE_SKILL",
  },
};
