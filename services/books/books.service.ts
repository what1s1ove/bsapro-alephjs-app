import { ApiPath, BooksApiPath, HttpMethod } from '~/common/enums/enums.ts'
import { IDataService } from '~/common/interfaces/interfaces.ts'
import { Book } from '~/common/types/types.ts'
import { Http } from '../http/http.service.ts'

type Constructor = {
  baseUrl: string
  http: Http
}

class Books implements Partial<IDataService<Book>> {
  #baseUrl: string

  #http: Http

  constructor({ http, baseUrl }: Constructor) {
    this.#baseUrl = baseUrl
    this.#http = http
  }

  public findAll() {
    return this.#http.load<Book[]>(this._getUrl(), {
      method: HttpMethod.GET,
    })
  }

  private _getUrl(path = BooksApiPath.ROOT) {
    return this.#baseUrl + ApiPath.BOOKS + path
  }
}

export { Books }
