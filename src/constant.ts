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
};
