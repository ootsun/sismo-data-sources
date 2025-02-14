import { Group } from "./group";
import { Tags, ValueType } from "./group.types";

const timestamp = 1657955315;
export const exampleData = {
  "0x411C16b4688093C81db91e192aeB5945dCA6B785": 1,
  "0xFd247FF5380d7DA60E9018d1D29d529664839Af2": 3,
};

const testGroups: { [name: string]: Group } = {
  group1_0: new Group({
    name: "test-group1",
    timestamp: timestamp,
    data: exampleData,
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  }),
  group1_1: new Group({
    name: "test-group1",
    timestamp: timestamp + 60,
    data: exampleData,
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  }),
  group2_0: new Group({
    name: "test-group2",
    timestamp: timestamp + 120,
    data: exampleData,
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  }),
};

export default testGroups;
