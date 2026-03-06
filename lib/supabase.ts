import { createClient } from '@supabase/supabase-js'

export type Customer = {
  id: string
  email: string
  business_name: string
  business_context: string
  tone: 'professional' | 'friendly' | 'casual'
  webhook_token: string
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  is_active: boolean
  created_at: string
}

// Lazy factory — avoids module-level initialization errors at build time
export function getServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
