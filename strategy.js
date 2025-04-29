class ZipCompression {
    compress(data) {
      console.log("Nén bằng ZIP");
    }
  }
  
  class RarCompression {
    compress(data) {
      console.log("Nén bằng RAR");
    }
  }
  
  class FileCompressor {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    compress(data) {
      this.strategy.compress(data);
    }
  }
  