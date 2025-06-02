export interface State {
  profile: Partial<{
    name: string;
    email: string;
    phone: string;
    bio: string;
  }>,
}