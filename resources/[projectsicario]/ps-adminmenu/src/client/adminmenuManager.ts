class AdminMenuManager {
  protected static instance: AdminMenuManager;

  static getInstance() {
    if (!AdminMenuManager.instance) {
      AdminMenuManager.instance = new AdminMenuManager();
    }
    return AdminMenuManager.instance;
  }
}

export default AdminMenuManager;