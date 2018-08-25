import sum from "./lib/sum";

export default {

	name: "math",

	actions: {
		sum: {
			params: {
				a: { type: "number" },
				b: { type: "number" }
			},
			handler(ctx) {
				const { a, b } = ctx.params;
				return sum(a, b);
			}
		}
	}

};
