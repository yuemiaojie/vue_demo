const getters = {
  userInfo: state => state.user.userInfo,
  addRoutes: state => state.permission.addRoutes,
  sidebarStatus: state => state.settings.sidebarStatus
}
export default getters
