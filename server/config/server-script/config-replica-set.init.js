rs.initiate(
	{
		_id: "config-replica-set",
		configsvr: true,
		members: [
			{ _id : 0, host : "config-serverA:27019" },
			{ _id : 1, host : "config-serverB:27019" },
			{ _id : 2, host : "config-serverC:27019" }
		]
	}
);
