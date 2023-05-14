'use client';
import {create} from 'zustand';

type AddModalState = {
  isOpen: boolean;
  toggle: () => void;
};
type EditModalState = AddModalState & {
  modalData: {name: string; email: string; role: string};
  modalId: string;
  setModalData: (data: {name: string; email: string; role: string}) => void;
  setModalId: (id: string) => void;
};

export const useAddUserModalStore = create<AddModalState>(set => ({
  isOpen: false,
  toggle: () => set(state => ({isOpen: !state.isOpen})),
}));
export const useEditUserModalStore = create<EditModalState>(set => ({
  isOpen: false,
  toggle: () => set(state => ({isOpen: !state.isOpen})),
  modalData: {name: '', email: '', role: ''},
  modalId: '',
  setModalData: data => set(() => ({modalData: data})),
  setModalId: id => set(() => ({modalId: id})),
}));
