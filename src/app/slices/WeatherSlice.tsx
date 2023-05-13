import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const initialState = {
    
    weatherDay: [
        { 
            temp: 20, 
            time: '12:15',
            city: 'Киев',
            tempDeskr: '20° - ощущается как 17°',
            pressure: '765 мм ртутного столба - нормальное',
            precipitation: 'Без осадков',
            wind: '3 м/с юго-запад - легкий ветер'
        },
    ],
    loading: false,
    error: false,
    city: 'Kyiv',
    weatherDays: [],
    openModal: false,
    openThanksModal: false
 
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherLoading: (state => {
            state.loading = true
        }),
        weatherLoaded: ((state, action: PayloadAction<any>) => {
            state.weatherDay = action.payload
            state.loading = false          
        }),
        weatherError: (state => {
            state.error = true
        }),
        changeCity: ((state, action: PayloadAction<string>) => {
            state.city = action.payload
        }),
        weatherSevenDayLoaded: ((state, action:PayloadAction<[]>) => {
            state.weatherDays = action.payload
            state.loading = false
            console.log(state.weatherDays)
        }),
        showMoreInfoDay: ((state, action:PayloadAction<number>) => {
            console.log(state.weatherDays);
            console.log(action.payload);
            
            //const more = state.weatherDays.filter(item => item.data == action.payload) 
        }),
        setOpenModal: (state => {
            state.openModal = !state.openModal
            
        }),
        setThanksModal: (state => {
            state.openThanksModal = !state.openThanksModal
        })
    }
})

const {actions, reducer} = weatherSlice;
export default reducer;
export const {
    weatherLoading,
    weatherLoaded,
    weatherError,
    changeCity, 
    weatherSevenDayLoaded, 
    showMoreInfoDay,
    setOpenModal,
    setThanksModal
} = actions;