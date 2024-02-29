export interface DialogProps {
  open: boolean,
  openDialog: (open: boolean) => void
}

export type Time = {
  time: number;
  formattedTime: string;
  start: boolean;
  startTime: () => void;
}

export type Word = {
  currentWord: string;
  newWord: () => void;
}

export type Statistic = {
  plays: number;
  victories: number;
}

export type CurrentUserContextType = {
  time: Time;
  word: Word;
  statistic: Statistic
  addVictory: () => void;
  gameOver: () => void;
}
