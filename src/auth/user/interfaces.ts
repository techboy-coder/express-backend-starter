export interface dto_user_in_register {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}
export interface dto_user_out_register {
  value: {
    id: string,
    name: string,
    email: string,
    created_at: Date,
    updated_at: Date
  }
}