import { supabase } from '../../../client.js'

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res)
}
