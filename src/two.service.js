export default {

	name: "two",

	actions: {
		sum(ctx) {
			return ctx.call("one.sum", { a: 2, b: 1 });
		}
	}

};
