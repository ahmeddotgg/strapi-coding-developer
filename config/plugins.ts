export default ({ env }) => ({
	upload: {
		config: {
			provider: "@cosmo.chang1701/strapi-provider-upload-vercel-blob",
			providerOptions: {
				accessToken: env("BLOB_READ_WRITE_TOKEN"),
				pathname: env("BLOB_PATHNAME"),
			},
			actionOptions: {
				upload: {},
				uploadStream: {},
				delete: {},
			},
		},
	},
});
