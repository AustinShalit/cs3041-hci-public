
export interface Team {
    id: number;
    name: String;
}

export const TEST_TEAMS: Team[] = Array.from(Array(100).keys()).map((teamId) => {
    return {
        id: teamId,
        name: `Team #${teamId}`
    };
});

export const PRIORITIES: String[] = ['Low', 'Medium', 'High'];

export const CATEGORIES: String[] = ['Driver Station', 'Radio', 'Power', 'Electrical', 'Programming', 'Missed Match', 'Caught Fire'];
