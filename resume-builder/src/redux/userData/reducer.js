import { SETUSER, SETSKILLS } from './type';

export const SETUSER_INITIAL_STATE = {
    email: "dishantsthapit@email",
    firstName: "Dishant",
    lastName: "Sthapit",
    phoneNumber: "0410330140",
    summary: "I am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developerI am a developer",
    address: '32 Kerr Parade',
    title: 'Software Engineer',
    skills: 'qe',
};


const userReducer = (state = SETUSER_INITIAL_STATE, action) => {
    switch (action.type) {
        case SETUSER:
            console.log(action)
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                phoneNumber: action.payload.phoneNumber,
                summary: action.payload.summary,
                address: action.payload.address,
                title: action.payload.title,
            };
        case SETSKILLS:
            return {
                ...state,
                skills: action.payload.skills
            };
        default: return state;
    }
};

export default userReducer;