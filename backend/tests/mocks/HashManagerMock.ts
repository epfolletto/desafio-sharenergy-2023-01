export class HashManagerMock {
  public hash = async (plaintext: string): Promise<string> => {
    if (plaintext == "normal") {
      return "hash-mock-normal"
    }

    return "hash-mock"
  }

  public compare = async (plaintext: string, hash: string): Promise<boolean> => {
    if (plaintext == "normal" && hash == "hash-mock-normal") {
      return true
    }

    return false
  }
}