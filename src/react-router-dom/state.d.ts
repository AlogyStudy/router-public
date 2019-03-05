
export interface IStateLocation {
  location: {
    [key: string]: any
  }
}


export interface IStateHistory {
  history: {
    [key: string]: any
  }
}

export interface IStateMatch {
  match: {
    [key: string]: any
  }
}

export interface IState extends IStateLocation, IStateHistory, IStateMatch {}
