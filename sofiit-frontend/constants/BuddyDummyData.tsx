import { BuddyProfile } from "@/components/BuddyProfileSummary";

const mockBuddyShirley: BuddyProfile = {
  firstName: "Shirley",
  lastName: "Jones",
  profilePicUrl:
    "https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg",
  pronouns: "she/her",
  school: "University of Toronto",
  commonGoals: ["increase-physical-activity", "make-new-friends"],
  commonActivities: ["running", "swimming"],
  commonSelfDescribes: ["online-learner", "creative"],
};

const mockBuddyJohn: BuddyProfile = {
  firstName: "John",
  lastName: "Doe",
  profilePicUrl: "https://i.imgur.com/pUkangm.jpeg",
  pronouns: "he/him",
  school: "Viterbi School of Engineering",
  commonGoals: ["reduce-stress", "make-new-friends"],
  commonActivities: ["running", "swimming"],
  commonSelfDescribes: ["multilingual", "accessibility-needs"],
};

const mockBuddyJane: BuddyProfile = {
  firstName: "Jane",
  lastName: "Doe",
  profilePicUrl: "https://i.imgur.com/osAEdYt.png",
  pronouns: "she/her",
  school: "Viterbi School of Engineering",
  //different from mockBuddyData2 to show different common goals
  commonGoals: ["learn-new-skill", "make-new-friends"],
  commonActivities: ["running", "swimming"],
  commonSelfDescribes: ["international", "online-learner"],
};

export {
  mockBuddyShirley as mockBuddyData,
  mockBuddyJohn as mockBuddyData2,
  mockBuddyJane as mockBuddyData3,
};
