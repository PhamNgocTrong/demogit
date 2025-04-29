class AppConfig {
    constructor() {
      if (AppConfig.instance) return AppConfig.instance;
      this.language = "vi";
      this.theme = "dark";
      AppConfig.instance = this;
    }
  }
  