export const history = [];

export const addHistory = (items, total) => {
  const waktu = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "long",
  });

  const invoice = {
    waktu,
    items,
    total,
  };

  history.push(invoice);
};

export const showHistory = async () => {
  console.log("\n===== HISTORY TRANSAKSI =====");
  if (history.length === 0) {
    console.log("Belum ada transaksi");
    return;
  }

  history.forEach((h, i) => {
    console.log(`\n#${i + 1} - ${h.waktu}`);
    h.items.forEach((item) => {
      console.log(
        `   - ${item.amount}x ${item.name} @Rp${Number(
          item.price
        ).toLocaleString("id")} = Rp${Number(item.subtotal).toLocaleString(
          "id"
        )},-`
      );
    });
    console.log(`   Total: Rp${Number(h.total).toLocaleString("id")},-`);
  });
};
