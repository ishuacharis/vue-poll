export let actions = {

    increment(context, payload) {
        console.log(context);
        return context.commit({
            type: payload.type,
            amount: payload.amount
        });
    }

}

