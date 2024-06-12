var modal = document.getElementById("myModal");

function openModal() {
  modal.classList.add("show");
  setTimeout(function () {
    modal.querySelector(".modal-content").classList.add("show");
  }, 10);
}

function closeModal() {
  modal.querySelector(".modal-content").classList.remove("show");
  setTimeout(function () {
    modal.classList.remove("show");
  }, 500);
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

var modalBalance = document.getElementById("modalBalance");

function openModalBalance() {
  modalBalance.classList.add("show");
  setTimeout(function () {
    modalBalance.querySelector(".modal-content_balance").classList.add("show");
  }, 10);
}

function closeModalBalance() {
  modalBalance.querySelector(".modal-content_balance").classList.remove("show");
  setTimeout(function () {
    modalBalance.classList.remove("show");
  }, 500);
}

window.onclick = function (event) {
  if (event.target == modalBalance) {
    closeModalBalance();
  }
};

var modaleBalanceAdd = document.getElementById("add_balance");

function openAddBalance() {
  modaleBalanceAdd.classList.add("show");
  setTimeout(function () {
    modaleBalanceAdd.querySelector(".modal_balance-add").classList.add("show");
  }, 10);
}

function closeAddBalance() {
  modaleBalanceAdd.querySelector(".modal_balance-add").classList.remove("show");
  setTimeout(function () {
    modaleBalanceAdd.classList.remove("show");
  }, 500);
}

window.onclick = function (event) {
  if (event.target == modaleBalanceAdd) {
    closeAddBalance();
  }
};
document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(function (dropdown) {
    var selected = dropdown.querySelector(".dropdown-selected");
    var items = dropdown.querySelectorAll(".dropdown-item");

    selected.addEventListener("click", function () {
      dropdown.classList.toggle("show");
    });

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        var text = this.textContent;
        selected.querySelector(".dropdown-text").textContent = text;
        dropdown.classList.remove("show");
      });
    });

    window.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  });
});
