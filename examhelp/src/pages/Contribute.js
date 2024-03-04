import Filetype from "../components/Filetype";
import Filetypenote from "../components/Filetypenote";
import Filetypebooks from "../components/Filetypebooks";

export default function Contribute() {
  return (
    <section id="contribute" class="bg-light mt-4" style={{ backgroundColor: "rgb(240, 238, 238)" }}>
      <div class="container-lg">
        <div class="text-center">
          <h2>
            <i class="bi bi-hand-index-thumb-fill"></i>Contribute Us & Help Your Friends..</h2>
          <p class="lead text-muted">
            Upload your Question Papers,Handwritten Notes & Reference Books
          </p>
        </div>

        <div class="row justify-content-center my-5">
          <div class="col-lg-6">
            <form action="">


              <label for="contribution" class="form-label">
                File Type
              </label>
              <div class="input-group mb-4">
                <span class="input-group-text">
                  <i class="bi bi-question-circle-fill"></i>
                </span>
                <select class="form-select" aria-label="Default select example" id="subject">
                  <option selected>Select the file type</option>
                  <option value="Notes">Notes</option>
                  <option value="PYQ's">PYQ's</option>
                  <option value="Books">Books</option>
                </select>
              </div>

              <div class="mb-4 text-center">
                <button type="submit" class="btn btn-warning">
                  Submit <i class="bi bi-send-fill"></i>
                </button>
              </div>
              


              <Filetype/>
              <Filetypenote/>
              <Filetypebooks/>
              

              

              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}