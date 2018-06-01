//import functions from expenseActions?

const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function ExpenseReducer (state = defaultState, action) {
    //state = defaultState is new ES6 syntax which defines a default value on a parameter
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_EXPENSE_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            };
        }

        case 'UPDATE_EXPENSE_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            };
        }

        case 'ADD_EXPENSE': {
            const { description, amount } = action.payload;
            return {
                description: '',
                action: '',
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]
            };
        }

        default: { 
            return state;
        }
    }
}