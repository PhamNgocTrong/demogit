class Button {
    render() {
      return "Nút mặc định";
    }
  }
  
  class RoundButton extends Button {
    render() {
      return "Nút tròn";
    }
  }
  
  class SquareButton extends Button {
    render() {
      return "Nút vuông";
    }
  }
  
  class ButtonFactory {
    createButton(type) {
      if (type === "round") return new RoundButton();
      if (type === "square") return new SquareButton();
      return new Button();
    }
  }
  