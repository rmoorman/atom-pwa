declare namespace NodeJS {
  interface Global {
    AtomNative: {
      isHybrid: () => boolean;
      getDebugMode: () => boolean;
    };
  }
}
