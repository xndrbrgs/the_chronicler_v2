import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://pdlpifvrjvazgnprhvki.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkbHBpZnZyanZhemducHJodmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDMzOTAsImV4cCI6MTk5NjcxOTM5MH0.EKopk66-3hlHOWBaqoK8PA-QLrILLaAf-uzjNRmzHu0')