export interface User {
  account: {
    id: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
  };
  profile: {
    role: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    profileImage: string;
    school: string;
    studentType: string;
    degree: string;
    graduation: string;
    feelingAboutDailyActivities: string;
    feelingSupportedByPeers: string;
    workoutsPerWeekGoal: string;
    currentGoals: string[];
    describesYou: string[];
    buddyGenderPreference: string;
    bio: string;
    questionForBuddy: string;
    hearAboutUs: string;
  };
}
