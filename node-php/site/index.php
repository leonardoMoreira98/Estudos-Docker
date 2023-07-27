<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>
</head>
<body>
<?php
    $result = file_get_contents("http://node-container:8000/produtos");
    $products = json_decode($result);
  ?>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($produtos as $produtos): ?>
          <tr>
            <td><?php echo $produtos->nome; ?></td>
            <td><?php echo $produtos->preco; ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</body>
</html>