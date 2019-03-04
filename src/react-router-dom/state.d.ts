
export interface IStateLocation {
  localtion: {
    [key: string]: any
  }
}


export interface IStateHistory {
  history: {
    [key: string]: any
  }
}

export interface IState extends IStateLocation, IStateHistory {}