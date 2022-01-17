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
    weatherDays: [
        {
            data: '28 января',
            imgName: 'Cloud',
            term: '+4',
            termnight: '+1',
            descr: 'string',
        }
    ],
 
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
        showMoreInfoDay: ((state, action:PayloadAction<[]>) => {
            console.log(state.weatherDays)
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
    showMoreInfoDay
} = actions;