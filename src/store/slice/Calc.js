import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
    name:'calc',
    initialState:{
        first:'',
        second:'',
        islem: '',
        sonuc:0
        
    },
    reducers:{
        ilkdeger(state,actions){
            
            if(state.sonuc !==0 && state.islem ==='topla'){
                state.first = state.sonuc
            }
            if(state.sonuc !==0 && state.islem ==='carp'){
                state.first = state.sonuc
            }
            if(state.sonuc !==0 && state.islem ==='cıkart'){
                state.first = state.sonuc
            }
            if(state.sonuc !==0 && state.islem ==='bol'){
                state.first = state.sonuc
            }
            if(state.sonuc !==0 && state.islem ==='yuzde'){
                state.first = state.sonuc
            }
            if(state.islem ==='') {
                state.first = state.first +actions.payload
                console.log('ilk değer',state.first)
                console.log('ilk değer',typeof(state.first))
            }
            else if (state.islem !== '') {
                state.second = state.second +actions.payload
                console.log('ikinci değer',state.second)
                console.log('ikinci değer',typeof(state.second))
            }
       

        },
        yapılacakİslem(state,actions){
           console.log('islem degeri:',actions.payload )
           state.islem = actions.payload
           if(state.islem === 'AC') {
            state.first = '';
            state.second = '';
            state.sonuc = 0;
            state.islem = ''
           }
          
        },
        hesapla(state,actions){
            if(state.islem ==='topla') {
                state.sonuc = parseInt(state.first) + parseInt(state.second)
                state.first = '';
                state.second = '';
         
                state.islem = '';
                
            }
            if(state.islem ==='cıkart') {
                state.sonuc = parseInt(state.first) - parseInt(state.second)
                state.first = '';
                state.second = '';
         
                state.islem = '';
                
            }
            if(state.islem ==='bol') {
                state.sonuc = parseInt(state.first) / parseInt(state.second)
                state.first = '';
                state.second = '';
         
                state.islem = '';
                
            }
            if(state.islem ==='carp') {
                state.sonuc = parseInt(state.first) * parseInt(state.second)
                state.first = '';
                state.second = '';
         
                state.islem = '';
                
            }
            if(state.islem ==='yüzde') {
                state.sonuc =( parseInt(state.first) * parseInt(state.second)) / 100
                state.first = '';
                state.second = '';
         
                state.islem = '';
                
            }
        }
        
    }
})


 export const calcReducers = calcSlice.reducer 

 export const { ilkdeger,yapılacakİslem,hesapla} = calcSlice.actions