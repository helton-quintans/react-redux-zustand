// import reducers from '../../reducers';

// test('reducers', () => {
//   let state;
//   state = reducers({palyer:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'Jai8w6K_GnY',title:'CSS Modules',duration:'13:45'},{id:'w-DW4DhDfcw',title:'Estilização do Post',duration:'10:05'},{id:'D83-55LUdKE',title:'Componente: Header',duration:'06:33'},{id:'W_ATsETujaY',title:'Componente: Sidebar',duration:'09:12'},{id:'Pj8dPeameYo',title:'CSS Global',duration:'03:23'},{id:'8KBq2vhwbac',title:'Form de comentários',duration:'11:34'}]},{id:'2',title:'Estrutura da aplicação',lessons:[{id:'gE48FQXRZ_o',title:'Componente: Comment',duration:'13:45'},{id:'Ng_Vk4tBl0g',title:'Responsividade',duration:'10:05'},{id:'h5JA3wfuW1k',title:'Interações no JSX',duration:'06:33'},{id:'1G0vSTqWELg',title:'Utilizando estado',duration:'09:12'}]}]},currentModuleIndex:0,currentLessonIndex:4}}, {type:'player/nextLesson'});
//   expect(state).toEqual({palyer:{course:{modules:[{id:'1',title:'Iniciando com React',lessons:[{id:'Jai8w6K_GnY',title:'CSS Modules',duration:'13:45'},{id:'w-DW4DhDfcw',title:'Estilização do Post',duration:'10:05'},{id:'D83-55LUdKE',title:'Componente: Header',duration:'06:33'},{id:'W_ATsETujaY',title:'Componente: Sidebar',duration:'09:12'},{id:'Pj8dPeameYo',title:'CSS Global',duration:'03:23'},{id:'8KBq2vhwbac',title:'Form de comentários',duration:'11:34'}]},{id:'2',title:'Estrutura da aplicação',lessons:[{id:'gE48FQXRZ_o',title:'Componente: Comment',duration:'13:45'},{id:'Ng_Vk4tBl0g',title:'Responsividade',duration:'10:05'},{id:'h5JA3wfuW1k',title:'Interações no JSX',duration:'06:33'},{id:'1G0vSTqWELg',title:'Utilizando estado',duration:'09:12'}]}]},currentModuleIndex:0,currentLessonIndex:5}});
// });

import { describe, expect, it } from 'vitest'
import { play, playerSlice, player as reducer } from './player'

describe('Player Slice', () => {
  it('should be alble to play'), () => {
    const initialState = playerSlice.getInitialState()

    const state = reducer(initialState, play([1,2]))

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(2)
  }
})