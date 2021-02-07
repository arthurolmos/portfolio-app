export interface IMenuItem {
  option: string;
  url: string;
  active?: boolean;
  close?: () => void;
}
