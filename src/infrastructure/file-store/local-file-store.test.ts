import { LocalFileStore } from "./local-file-store";

describe("test local file store", () => {
  const fileStore = new LocalFileStore("tests-file-store");

  beforeEach(async () => {
    await fileStore.reset();
  });

  test("Should store a file and retrieve", async () => {
    await fileStore.write("test_file", "test_data");
    expect(await fileStore.read("test_file")).toBe("test_data");
  });

  test("Should store multiple files and list them", async () => {
    await fileStore.write("test_file1", "test_data1");
    await fileStore.write("test_file2", "test_data2");
    const files = await fileStore.list("./");
    expect(files).toHaveLength(2);
    expect(files).toContain("test_file1");
    expect(files).toContain("test_file2");
  });

  test("Should store multiple files and list them in multiple directories", async () => {
    await fileStore.write("dir1/test_file1", "test_data");
    await fileStore.write("dir1/test_file2", "test_data");
    await fileStore.write("dir2/test_file3", "test_data");
    const files_dir1 = await fileStore.list("dir1");
    expect(files_dir1).toHaveLength(2);
    expect(files_dir1).toContain("test_file1");
    expect(files_dir1).toContain("test_file2");
    const files_dir2 = await fileStore.list("dir2");
    expect(files_dir2).toHaveLength(1);
    expect(files_dir2).toContain("test_file3");
  });

  test("Should return empty list listing non existing directory", async () => {
    expect(await fileStore.list("not_a_directory")).toEqual([]);
  });

  test("Should verify url is local file", async () => {
    const url = fileStore.url("test_filename");
    expect(url.startsWith("file://")).toBeTruthy();
  });

  test("Should verify url is absolute path", async () => {
    const url = fileStore.url("test_filename");
    expect(url.startsWith("file:///")).toBeTruthy();
  });
});
