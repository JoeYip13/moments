import { rest } from "msw";

const baseURl = "https://drf-api-jy-ae86ff1e9b3e.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 20,
                username: "Gary",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 20,
                profile_image:
                    "https://res.cloudinary.com/dcjkzptkn/image/upload/v1/media/../samples/default_profile_lompwn",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];
