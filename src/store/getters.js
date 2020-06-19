const getters = {
  userInfo: state => state.user.userInfo,
  addRoutes: state => state.permission.addRoutes,
  sidebarStatus: state => state.settings.sidebarStatus,
  language: state => state.settings.language
}
export default getters
