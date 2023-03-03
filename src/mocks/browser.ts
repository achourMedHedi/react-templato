import { rest, setupWorker } from "msw";

const worker = setupWorker(
    rest.get<undefined, {firstName: string}>("/api/me" , (req, res,ctx) => {
        return res(
          // ctx.status(400),
            ctx.json({
              firstName: 'John'
            })
          )
    }),
)

worker.start()