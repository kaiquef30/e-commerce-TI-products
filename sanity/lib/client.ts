import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skAlckejOvwM39fXOlsOvZcRePlV9LcKJviBlyrnEUzbq0KVQEezC9IDZ0kOhqzIg13TUVdrFBLPb1ihIt1jwWlmHili6Mdf4pOo87HyaWlVZ6VMwSGqOwyreG7kwPPimT6NcIejiHD81ck5BmH9LdpWvouyogwUwajX6kekBYJ6FBF06Luw"
})
