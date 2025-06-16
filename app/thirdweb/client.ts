import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
const secretKey = process.env.THIRDWEB_SECRET_KEY;

if (!clientId) {
  throw new Error("NEXT_PUBLIC_THIRDWEB_CLIENT_ID is not defined");
}

// if (!secretKey) {
//   throw new Error("THIRDWEB_SECRET_KEY is not defined");
// }

export const client = createThirdwebClient({
  clientId,
  //   secretKey,
});
